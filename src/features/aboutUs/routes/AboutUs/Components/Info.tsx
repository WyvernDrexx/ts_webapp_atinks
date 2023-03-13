import {
  faAddressBook, faClock,
  faLink,
  faLocationPin,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import { FloatingDrawer } from 'components/common/FloatingDrawer'
import { ContactType } from 'features/aboutUs'
import { useState } from 'react'
import { Card } from '../../../components/Card'
import { ContactCardBody } from './ContactCardBody'
import { ContactEdit } from './ContactEdit'
import { ContactList } from './ContactList'

function Info() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [showContactEdit, setShowContactEdit] = useState(false)
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    null
  )
  const [contacts, setContacts] = useState<ContactType[]>([
    {
      teamName: 'Sales Team',
      emails: ['salesteam@br.in', 'salesteam2@br.in', 'salesteam3@br.in'],
      phoneNumbers: ['+91 8511591740', '8000058214', '112233445566'],
      key: 'sales-team'
    },
    {
      teamName: 'Marketing Team',
      emails: [
        'marketingteam@br.in',
        'marketingteam2@br.in',
        'marketingteam3@br.in'
      ],
      phoneNumbers: ['+91 8511591740', '8000058214', '112233445566'],
      key: 'marketing-team'
    },
    {
      teamName: 'Devops Team',
      emails: ['devopsteam@br.in', 'devopsteam2@br.in', 'devopsteam3@br.in'],
      phoneNumbers: ['+91 8511591740', '8000058214', '112233445566'],
      key: 'devops-team'
    }
  ])

  const cards = [
    {
      title: 'Contact',
      icon: faAddressBook,
      onEditClick: () => setShowContactEdit(true),
      Body: (
        <ContactCardBody
          emails={contacts[0].emails}
          phoneNumbers={contacts[0].phoneNumbers}
        />
      )
    },
    {
      title: 'Address',
      icon: faLocationPin,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Hours of Operations',
      icon: faClock,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Social Media & Links',
      icon: faLink,
      onEditClick: () => alert('Clicked!')
    },
    {
      title: 'Statement',
      icon: faQuoteLeft,
      onEditClick: () => alert('Clicked!')
    }
  ]

  const handleContactSave = (contact: ContactType | null) => {
    if (!contact) return
    setContacts((s) =>
      s.map((e) => {
        if (e.key === contact.key) return contact
        return e
      })
    )
    setIsEditMode(false)
  }

  return (
    <div className='grid grid-cols-3 gap-5'>
      {cards.map((e) => (
        <Card
          key={e.title}
          icon={e.icon}
          onEditClick={e.onEditClick}
          title={e.title}
        >
          {e.Body && e.Body}
        </Card>
      ))}
      <FloatingDrawer
        show={showContactEdit}
        onClose={() => setShowContactEdit(false)}
        title='Contacts'
      >
        <ContactList
          contacts={contacts}
          onEditClick={(e) => {
            setIsEditMode(true)
            setSelectedContact(e)
          }}
        />
      </FloatingDrawer>
      <FloatingDrawer
        title={`Editing Contacts of ${selectedContact?.teamName}`}
        onClose={() => setIsEditMode(false)}
        show={isEditMode}
      >
        <ContactEdit contact={selectedContact} handleSave={handleContactSave} />
      </FloatingDrawer>
    </div>
  )
}

export { Info }

