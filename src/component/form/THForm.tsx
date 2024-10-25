import { ReactNode, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  
} & TFormConfig;

const THForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};

 


  const methods = useForm(formConfig);


  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="p-5">
        {children}
      </form>
    </FormProvider>
  );
};

export default THForm;
