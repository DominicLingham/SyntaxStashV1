<script setup lang="ts">
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

// Zod initialisation
const loginValidation = toTypedSchema(
    z.object({
      email: z.string().email('Invalid email'),
      password: z.string().min(8, 'Must be at least 8 characters'),
    })
);

// Form initialisation
const { handleSubmit, errors, values, defineField } = useForm({
  validationSchema: loginValidation,
  initialValues: {
    email: '',
    password: '',
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');


// Actions
const onSubmit = handleSubmit(async (values) => {
  console.log('Form submitted with:', values);
});
</script>

<template>
  <UCard>
    <UForm :errors="errors"
           :state="values"
           @submit="onSubmit">
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
        Login
      </UButton>
    </UForm>
    
    <pre>{{values}}</pre>
  </UCard>
</template>

<style scoped>
/* Add custom styles if needed */
</style>