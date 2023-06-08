import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export function DateTimePicker(){
    return (
        <DatePicker
            selected={new Date()}
            onChange={(date:  Date) => {}}
            />
    );
}