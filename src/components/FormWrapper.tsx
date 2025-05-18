import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function FormWrapper({ title, children }: Props) {
  return (
    <section className="max-w-3xl">
      <h1 className="text-3xl font-heading font-semibold text-saafe mb-8">{title}</h1>
      <form className="">{children}</form>
    </section>
  )
}
