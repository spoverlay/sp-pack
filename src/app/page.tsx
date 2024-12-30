"use client"
import { Download, DownloadIcon, GithubIcon } from "lucide-react";
import SpPackIcon from "../../components/icons/SpPackIcon";



export default function Home() {

  async function downloadLatestZipAsset(): Promise<void> {
    const apiUrl = `https://api.github.com/repos/aladairmaxwell/sp/releases/latest`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'typescript-app',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch latest release: ${response.statusText}`);
        }

        const releaseData = await response.json();
        const assets = releaseData.assets;

        if (!assets || assets.length === 0) {
            throw new Error('No assets found in the latest release.');
        }

        const zipAsset = assets.find((asset: any) => asset.browser_download_url.endsWith('.zip'));

        if (!zipAsset) {
            throw new Error('No .zip asset found in the latest release.');
        }

        const downloadUrl = zipAsset.browser_download_url;

        console.log(`Opening .zip asset in browser: ${downloadUrl}`);

        window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error(`Error: ${error instanceof Error ? error.message : error}`);
    }  
  }

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
          <button
          onClick={() => downloadLatestZipAsset()}
          className="flex gap-2 items-center p-3 px-14 text-lg rounded-xl border-2 border-dashed transition-all duration-200 border-white/50 bg-button hover:border-blue">
            <DownloadIcon className="size-5"/>
            Скачать SP.zip
          </button>
        </div>
      </main>
      <footer className="flex relative gap-1.5 justify-center items-center font-light h-[10dvh]">
        <a target="_blank" href="https://spoverlay.ru" className="opacity-70 hover:opacity-100 transition-all duration-200 hover:text-blue">by spoverlay</a>
        <p className="font-extralight opacity-30">/</p>
        <a target="_blank" href="https://modrinth.com/mod/dynamicpack" className="opacity-70 hover:opacity-100 transition-all duration-200 hover:text-blue">dynamicpack</a>
        <p className="font-extralight opacity-30">/</p>
        <a target="_blank" href="https://spworlds.ru" className="opacity-70 hover:opacity-100 transition-all duration-200 hover:text-blue">spworlds</a>
      </footer>
      
      <div className="flex gap-1.5 justify-center py-4 text-sm font-extralight">
        <p className="opacity-70">© Все права защищены</p>
        <p className="font-extralight opacity-30">/</p>
        <a target="_blank" href="https://github.com/aladairmaxwell/SP" className="opacity-70 transition-colors duration-200 hover:opacity-100 hover:text-blue">github</a>
        <p className="font-extralight opacity-30">/</p>
        <a target="_blank" href="https://discord.gg/XqHb7AhXc3" className="opacity-70 transition-colors duration-200 hover:opacity-100 hover:text-blue">discord</a>
      </div>
    </>
  );
}