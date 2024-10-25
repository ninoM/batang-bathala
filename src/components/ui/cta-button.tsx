import { Button } from "./button"

export const CtaButton = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
      {children}
    </Button>
  )
}
