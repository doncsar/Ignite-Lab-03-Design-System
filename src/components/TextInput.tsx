import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'



export interface TextInputRootProps {
   children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
   return (
      <div className='flex h-12 items-center gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300'>
         {props.children}
      </div>
   )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
   children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
   return (
      <Slot className=' w-6 h-4 text-gray-400'>
         {props.children}
      </Slot>
   )
}
TextInputIcon.displayName = "TextInput.Icon"

interface TextInputFormProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputForm(props: TextInputFormProps) {
   return (
      <input
         className={clsx(
            'w-full text-gray-100 text-xs outline-none placeholder:text-gray-400 bg-transparnt'
         )}
         {...props}
      />
   )
}
TextInputForm.displayName = 'TextInput.Form'


export const TextInput = {
   Root: TextInputRoot,
   Input: TextInputForm,
   Icon: TextInputIcon,
}