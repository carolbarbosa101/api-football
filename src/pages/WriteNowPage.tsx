import { Button, DateTimePicker, Nav } from "components";

export function WriteNowPage(){
    const { register, handleSubmit} = useForm()
    
    return (
        <>
            <Nav/>

            <div className="container">

            <h1>Se Cadastre para saber informações do seu time</h1>
            <form className="form" onSubmit={}>

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
            </div>
        </>
    );
} 