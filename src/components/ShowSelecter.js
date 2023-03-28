import { SelectMassage } from './Selectors/SelectMassage'
import { SelectDuration } from './Selectors/SelectDuration'
import { SelectDay } from './Selectors/SelectDay'
import { SelectHour } from './Selectors/SelectHour'

export const ShowSelecter = () => {

    return (
    <div className='w-[60vw] mx-auto'>
        <div className='my-4'>
            <SelectMassage />
            <SelectDuration />
            <SelectDay />
            <SelectHour />
        </div>
    </div>
    )
}
