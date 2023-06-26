import { FormProvider, useForm } from 'react-hook-form';
import { Button, DateTimePicker, Nav } from "components";

export function WriteNowPage(){
    const formMethods = useForm();
    const {register, handleSubmit} = formMethods;

    function onSubmit(values: any){

        console.log("~ file: WriteNowPage.tsx ~ line 9 ~ onSubmit ~ values",
        values)
    }
    
    return (
        <>
            <Nav/>
            <div className="container">
            <h1>Se Cadastre para saber informações do seu time</h1>
            
            <FormProvider {...formMethods}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="destinationName"> Nome Completo:  </label>
                <input {...register('destinationName')} type="text" placeholder="seu nome completo"/>
              
                <label htmlFor="destinationAddress"> E-mail: </label>
                <input {...register('destinationAddress')} type="text" placeholder="Ex. joao@email.com" />
                
                <label htmlFor="dueDate">Data: </label>
                <DateTimePicker />
                
                <label htmlFor="key">Key Auntetication: </label>
                <input {...register('key')} type="password" placeholder="**********"/>
                
                <Button type="submit" variant="primary"> Login</Button>
            </form>
            </FormProvider>
            </div>
        </>
    );
} 