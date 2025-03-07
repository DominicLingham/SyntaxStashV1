<script setup lang="ts">
import {z} from 'zod';
import {useForm} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/zod';
import {signIn, signUp} from "~/lib/auth-client";

// Zod initialisation
const loginValidation = toTypedSchema(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email('Invalid email'),
      password: z.string().min(8, 'Must be at least 8 characters'),
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
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [firstName] = defineField('firstName');
const [lastName] = defineField('lastName');

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
        useRouter().push("/");
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
          type="password"
          placeholder="Enter your password"
      />
    </UFormGroup>

    <UButton type="submit" color="primary">
      Sign up
    </UButton>
  </UForm>

  <pre>{{ fullNameValue }}</pre>
  <pre>{{ passwordValue }}</pre>
  <pre>{{ emailValue }}</pre>
</template>

<style scoped>

</style>