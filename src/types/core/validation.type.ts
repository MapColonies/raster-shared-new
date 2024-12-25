interface ValidationRule {
  pattern?: string; // Regular expression pattern for validation
  min?: number; // Minimum value for numeric validations
  max?: number; // Maximum value for numeric validations
  description?: string; // Optional description of the validation rule
}

export type ValidationRules = Record<string, ValidationRule>;
