
import { getDictionary } from '../dictionaries';

const ContactPage = async({params:{lang}}) => {

    const dict = await getDictionary(lang);

  return (
    <div className='p-20 text-center'>{dict.contact}</div>
  )
}

export default ContactPage;