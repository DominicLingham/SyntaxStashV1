<script setup lang="ts">
import {z} from 'zod';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {signIn, signUp} from "~/lib/auth-client";

const showPassword = ref<boolean>(false);
const showPasswordConfirm = ref<boolean>(false);

// Zod initialisation
const loginValidation = toTypedSchema(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email('Invalid email'),
      password: z.string().min(8, 'Must be at least 8 characters'),
      confirmPassword: z.string().min(8, 'Must be at least 8 characters'),
    })
);

// Form initialisation
const {handleSubmit, errors, values, defineField} = useForm({
  validationSchema: loginValidation,
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [firstName] = defineField('firstName');
const [lastName] = defineField('lastName');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

const emailValue = computed(() => values.email || "");
const fullNameValue = computed(() => `${values.firstName} ${values.lastName}` || "");
const passwordValue = computed(() => values.password || "");

const handleSignUp = handleSubmit(async (values) => {
  const {data, error} = await signUp.email({
    email: emailValue.value,
    password: passwordValue.value,
    name: fullNameValue.value,
    fetchOptions: {
      onError(context) {
        console.log(context);
        alert(context.error.message);
      },
      onSuccess() {
        useRouter().push("/welcome");
      },
    },
  });
});
</script>

<template>
  <UForm :errors="errors"
         :state="values"
         class="space-y-4"
         @submit="handleSignUp">
    <UFormGroup label="First name" name="firstName">
      <UInput
          v-model="firstName"
          placeholder="First name"
      />
    </UFormGroup>

    <UFormGroup label="Last name" name="lastName">
      <UInput
          v-model="lastName"
          placeholder="First name"
      />
    </UFormGroup>

    <UFormGroup label="Email address" name="email" :error="errors.email">
      <UInput
          v-model="email"
          v-bind="emailAttrs"
          type="email"
          placeholder="Enter your email (e.g. name@domain.com)"
      />
    </UFormGroup>

    <UFormGroup label="Password"
                name="password"
                :error="errors.password">
      <UInput
          v-model="password"
          v-bind="passwordAttrs"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter your password"
          :ui="{ icon: { trailing: { pointer: '' } } }">
        <template #trailing>
          <UButton
              color="gray"
              variant="link"
              :icon="showPassword ? 'i-bxs:hide' : 'i-bx:show'"
              :padded="false"
              @click="showPassword = !showPassword"
          />
        </template>
      </UInput>
    </UFormGroup>

    <UFormGroup label="Confirm password"
                name="confirmPassword"
                :error="errors.confirmPassword">
      <UInput
          v-model="confirmPassword"
          v-bind="confirmPasswordAttrs"
          :type="showPasswordConfirm ? 'text' : 'password'"
          placeholder="Confirm your password"
          :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <template #trailing>
          <UButton
              color="gray"
              variant="link"
              :icon="showPasswordConfirm ? 'i-bxs:hide' : 'i-bx:show'"
              :padded="false"
              @click="showPasswordConfirm = !showPasswordConfirm"
          />
        </template>
      </UInput>
    </UFormGroup>

    <UButton type="submit" color="primary">
      Sign up
    </UButton>
  </UForm>
</template>

<style scoped>

</style>