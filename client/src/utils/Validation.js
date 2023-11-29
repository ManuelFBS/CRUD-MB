export const validatedForm = (employee) => {
  const newErrors = {};

  // Validar que todos los campos obligatorios estén llenos...
  if (!employee.name.trim()) {
    newErrors.name = 'El nombre es obligatorio';
  }

  if (employee.age < 18) {
    newErrors.age = 18;
  }

  if (!employee.country.trim()) {
    newErrors.country = 'El país es obligatorio';
  }

  if (!employee.position.trim()) {
    newErrors.position = 'El cargo es obligatorio';
  }

  if (employee.years < 1) {
    newErrors.years = 1;
  }

  return newErrors;
};
