import { SelectMassage } from './Selectors/SelectMassage'
import { SelectDuration } from './Selectors/SelectDuration'
import { SelectDay } from './Selectors/SelectDay'
import { SelectHour } from './Selectors/SelectHour'

export const ShowSelecters = () => {

    return (
    <div className='md:w-[60vw] w-full px-8 md:px-0 mx-auto'>
        <div className='my-4'>
            <SelectMassage />
            <SelectDuration />
            <SelectDay />
            <SelectHour />
        </div>
    </div>
    )
}
