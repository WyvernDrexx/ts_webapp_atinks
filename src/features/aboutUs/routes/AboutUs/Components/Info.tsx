import {
  faAddressBook,
  faCirclePlus,
  faClock,
  faLink,
  faLocationPin,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import { FloatingDrawer } from 'components/common/FloatingDrawer'
import { useState } from 'react'
import { Card } from '../../../components/Card'
import { ContactCardBody } from './ContactCardBody'
import { TextField, Chip } from '@mui/material'
import { Button } from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactType } from 'features/aboutUs'
import { ContactList } from './ContactList'

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

  const handleContactRemove = (
    type: 'emails' | 'phoneNumbers',
    value: string
  ) => {
    if (!selectedContact) return
    const newContact = {
      ...selectedContact,
      [type]: selectedContact[type].filter((e) => e !== value)
    }
    setSelectedContact(newContact)
  }

  const handleContactAdd = (type: 'emails' | 'phoneNumbers', value: string) => {
    if (!selectedContact) return
    const newContact = {
      ...selectedContact,
      [type]: [value, ...selectedContact[type]]
    }
    setSelectedContact(newContact)
  }

  const handleContactSave = () => {
    if (!selectedContact) return
    setContacts((s) =>
      s.map((e) => {
        if (e.key === selectedContact.key) return selectedContact
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
        <div className='relative h-[100%]'>
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
                onDelete={() => handleContactRemove('emails', e)}
                label={e}
              />
            ))}
            <TextField
              type='email'
              variant='standard'
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              sx={{
                marginTop: 2,
                backgroundColor: '##f7f7f7'
              }}
              InputProps={{
                className: 'bg-[#f7f7f7] border-0 p-3 rounded-lg',
                disableUnderline: true
              }}
              placeholder='eg. salesteam@br.in'
              fullWidth
            />
            <Button
              onClick={() => handleContactAdd('phoneNumbers', phoneInput)}
              className='mt-4 hover:text-white hover:bg-[#c42e38] text-lg w-[100%] py-4 font-bold text-[#BF202A] bg-[#fff1f3]'
            >
              <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
              ADD MORE
            </Button>
          </div>
          <div className='mt-8 relative h-[100%]'>
            <p className='mb-2'>Contact Number</p>
            {selectedContact?.phoneNumbers.map((e) => (
              <Chip
                onDelete={() => handleContactRemove('phoneNumbers', e)}
                sx={{
                  marginRight: 1,
                  marginTop: 1
                }}
                label={e}
              />
            ))}
            <TextField
              type='tel'
              variant='standard'
              className='border-0'
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              sx={{
                marginTop: 2,
                backgroundColor: '##f7f7f7'
              }}
              InputProps={{
                className: 'bg-[#f7f7f7] border-0 p-3 rounded-lg',
                disableUnderline: true
              }}
              placeholder='eg. 8554526586'
              fullWidth
            />
            <Button
              onClick={() => handleContactAdd('phoneNumbers', phoneInput)}
              className='mt-4 hover:text-white hover:bg-[#c42e38] text-lg w-[100%] py-4 font-bold text-[#BF202A] bg-[#fff1f3]'
            >
              <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
              ADD MORE
            </Button>
          </div>
          <Button
            onClick={handleContactSave}
            className='w-[100%] bottom-12 h-12 text-lg bg-[#bf202a] absolute'
          >
            SAVE
          </Button>
        </div>
      </FloatingDrawer>
    </div>
  )
}

export { Info }
