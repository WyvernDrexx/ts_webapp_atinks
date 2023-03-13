import {
  faAddressBook,
  faClock,
  faLink,
  faLocationPin,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import { FloatingDrawer } from 'components/common/FloatingDrawer'
import { useState } from 'react'
import { Card } from '../../../components/Card'
import { ContactCardBody } from './ContactCardBody'
import { TextField, Button, Chip } from '@mui/material'

type ContactType = {
  teamName: string
  phoneNumbers: string[]
  emails: string[]
  key: string
}

function Info() {
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
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
  const handleContactAdd = (type: 'emails' | 'phoneNumbers', value: string) => {
    if (!selectedContact) return
    const newContact = {
      ...selectedContact,
      [type]: [value, ...selectedContact[type]]
    }
    setSelectedContact(newContact)
    setContacts((s) =>
      s.map((e) => {
        if (e.key === selectedContact.key) return newContact
        return e
      })
    )
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
        <p className='text-[#acb0b3] mt-4'>
          Please provide the company's email & contacts
        </p>
        {contacts.map((e) => (
          <div key={e.teamName} className='mt-6'>
            <Card
              icon={faAddressBook}
              title={e.teamName}
              onEditClick={() => {
                setIsEditMode(true)
                setSelectedContact(e)
              }}
            >
              <ContactCardBody
                emails={e.emails}
                phoneNumbers={e.phoneNumbers}
              />
            </Card>
          </div>
        ))}
      </FloatingDrawer>
      <FloatingDrawer
        title={`Editing Contacts of ${selectedContact?.teamName}`}
        onClose={() => setIsEditMode(false)}
        show={isEditMode}
      >
        <div>
          <p className='text-[#acb0b3] mt-4 mb-10'>
            Please provide the company's email & contacts
          </p>
          <div>
            <p className='mb-2'>Email ID</p>
            {selectedContact?.emails.map((e) => (
              <Chip
                sx={{
                  marginRight: 1,
                  marginTop: 1
                }}
                onDelete={() => null}
                label={e}
              />
            ))}
            <TextField
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              sx={{
                marginTop: 2
              }}
              fullWidth
            />
            <Button
              onClick={() => handleContactAdd('emails', emailInput)}
              sx={{
                marginTop: 3
              }}
              variant='contained'
              fullWidth
            >
              ADD MORE
            </Button>
          </div>
          <div className='mt-8'>
            <p className='mb-2'>Contact Number</p>
            {selectedContact?.phoneNumbers.map((e) => (
              <Chip
                onDelete={() => null}
                sx={{
                  marginRight: 1,
                  marginTop: 1
                }}
                label={e}
              />
            ))}
            <TextField
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              sx={{
                marginTop: 2
              }}
              fullWidth
            />
            <Button
              onClick={() => handleContactAdd('phoneNumbers', phoneInput)}
              sx={{
                marginTop: 2
              }}
              variant='contained'
              fullWidth
            >
              ADD MORE
            </Button>
          </div>
        </div>
      </FloatingDrawer>
    </div>
  )
}

export { Info }
