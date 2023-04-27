export const Workforce = ({ workforce: {} }) => {
  return (
    <div className=" w-96 h-12 border rounded-lg ">
      <div className="flex">
        <p>{Workforce.last_name || "r"}</p>
        <p>{Workforce.first_name}</p>
      </div>
      <p>{Workforce.birthday}</p>
    </div>
  )
}
