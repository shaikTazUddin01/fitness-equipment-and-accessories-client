import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const THForm = ({ onSubmit, children }:TFormProps) => {
  const methods = useForm();

  const submit:SubmitHandler<FieldValues>=(data)=>{
    onSubmit(data);
    methods.reset()
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="p-5">{children}</form>
    </FormProvider>
  );
};

export default THForm;
