<script setup lang="ts">
import FormEdit from '@/form/components/FormEdit.vue'
import type { FormSpec } from '@/form/components/vue_formspec_components'
import type { ValidationMessages } from '@/form/components/utils/validation'

defineProps<{
  spec: FormSpec
  backendValidation: ValidationMessages
}>()

const data = defineModel<unknown>('data', { required: true })
</script>

<template>
  <FormEdit v-model:data="data" :spec="spec" :backend-validation="backendValidation" />
  <pre data-testid="test-data">{{ JSON.stringify(data) }}</pre>
</template>
