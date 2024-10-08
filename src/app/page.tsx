import ButtonDefault from "@/components/Button/ButtonDefault";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center bg-blue-400 w-[480px] h-[250px] p-5 rounded-md">
      <div className="text-title-md font-semibold text-white">Cat Facts</div>
      <div>
        <div className="mb-6">
          <ButtonDefault size="lg" text="Facts" />
        </div>
        <div>
          <ButtonDefault size="lg" text="Breeds" />
        </div>
      </div>
    </div>
  );
}
