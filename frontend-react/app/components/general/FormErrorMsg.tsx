export default function FormErrorMsg({ str }: { str: string }) {
  return (
    <p className="bg-dark-blue p-1 wrap-break-word text-[0.9em] text-bright-yellow font-header mb-4 ">
      {str}
    </p>
  );
}
