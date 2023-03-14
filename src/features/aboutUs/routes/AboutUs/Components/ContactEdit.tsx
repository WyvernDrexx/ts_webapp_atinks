import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField, Chip } from '@mui/material'
import { Button } from 'components/common'
import { useState } from 'core'
import { ContactType } from 'features/aboutUs'

type ContactEditType = {
  contact: ContactType | null
  handleSave: (e: ContactType | null) => void
}

function ContactEdit({ contact, handleSave }: ContactEditType) {
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    contact
  )
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

  return (
    <div className='relative h-[100%]'>
      <p className='text-[#acb0b3] mt-4 mb-10'>
        Please provide the company's email & contacts
      </p>
      <div>
        <p className='mb-2 font-semibold'>Email ID</p>
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
          disabled={!emailInput}
          onClick={() => handleContactAdd('emails', emailInput)}
          className='mt-4 hover:text-white hover:bg-[#c42e38] text-lg w-[100%] py-4 font-bold text-[#BF202A] bg-[#fff1f3]'
        >
          <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
          Add More
        </Button>
      </div>
      <div className='mt-8 relative h-[100%]'>
        <p className='mb-2 font-semibold'>Contact Number</p>
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
          disabled={!phoneInput}
          onClick={() => handleContactAdd('phoneNumbers', phoneInput)}
          className='mt-4 hover:text-white hover:bg-[#c42e38] text-lg w-[100%] py-4 font-bold text-[#BF202A] bg-[#fff1f3]'
        >
          <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
          Add More
        </Button>
      </div>
      <Button
        onClick={() => handleSave(selectedContact)}
        className='w-[100%] bottom-12 h-[60px] text-lg bg-[#bf202a] absolute'
      >
        Save
      </Button>
    </div>
  )
}

export { ContactEdit }
