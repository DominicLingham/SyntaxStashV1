﻿<script setup lang="ts">
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import {signIn} from "~/lib/auth-client"

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
const handleSignIn = handleSubmit(async (values) => {
  const {data} = await signIn.email({
    email: values.email,
    password: values.password,
    fetchOptions: {
      onSuccess() {
        useRouter().push('/');
      }
    }
  })
  
  console.log(data);
});
</script>

<template>
  <UForm :errors="errors"
         :state="values"
         class="space-y-4"
         @submit="handleSignIn">
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

    <UButton
        block
        type="submit"
        color="primary">
      Login
    </UButton>
  </UForm>
</template>

<style scoped>
/* Add custom styles if needed */
</style>