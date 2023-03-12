import {
  faAddressBook,
  faLocationPin,
  faClock,
  faLink,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'
import { Card } from './Card'

function Info() {
  const cards = [
    {
      title: 'Contact',
      icon: faAddressBook,
      onEditClick: () => alert('Clicked!')
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

  return (
    <div className='grid grid-cols-3 gap-5'>
      {cards.map((e) => (
        <Card icon={e.icon} onEditClick={e.onEditClick} title={e.title} />
      ))}
    </div>
  )
}

export { Info }
