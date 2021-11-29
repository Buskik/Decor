import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {[
        'Login',
        'Endereço de entrega',
        'Forma de pagamento',
        'Finalizar compra',
      ].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
