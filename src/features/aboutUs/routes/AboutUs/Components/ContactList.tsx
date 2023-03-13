import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components/common'
import { Card } from 'features/aboutUs'
import { ContactType } from 'features/aboutUs'
import { ContactCardBody } from './ContactCardBody'

type ContactListProps = {
  contacts: ContactType[]
  onEditClick: (e: ContactType) => void
}

function ContactList({ contacts, onEditClick }: ContactListProps) {
  return (
    <div className='relative h-[100%]'>
      <p className='text-[#acb0b3] mt-4'>
        Please provide the company's email & contacts
      </p>
      {contacts.map((e) => (
        <div key={e.teamName} className='mt-6'>
          <Card
            icon={faAddressBook}
            title={e.teamName}
            onEditClick={() => onEditClick(e)}
          >
            <ContactCardBody emails={e.emails} phoneNumbers={e.phoneNumbers} />
          </Card>
        </div>
      ))}
      <Button className='w-[100%] bottom-12 h-12 text-lg bg-[#bf202a] absolute'>
        Save
      </Button>
    </div>
  )
}

export { ContactList }
