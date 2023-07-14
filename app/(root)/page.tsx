
import { UserButton } from "@clerk/nextjs";

export default function SetUpPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}