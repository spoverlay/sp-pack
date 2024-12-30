"use client"

import SpPackIcon from "../../components/icons/SpPackIcon";
import { Footer } from "../../components/Footer";
import { SecondFooter } from "../../components/SecondFooter";
import { DownloadButton } from "../../components/DownloadButton";



export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center h-[90dvh] pt-[10dvh]">
        <div className="p-14 py-10 space-y-4 rounded-2xl bg-secondary">
          <div className="flex flex-col items-center">
            <div className="flex gap-1 justify-center items-center text-3xl font-medium select-none">
              <SpPackIcon className="size-10 text-blue"/>
              SP Pack
            </div>
            <p className="text-sm font-light opacity-50 w-fit">для игроков</p>
          </div>
          <DownloadButton/>
        </div>
      </main>
      <Footer/>
      <SecondFooter/>
    </>
  );
}