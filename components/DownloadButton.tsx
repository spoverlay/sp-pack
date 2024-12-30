import { DownloadIcon } from "lucide-react";

export function DownloadButton() {
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

        // console.log(`Opening .zip asset in browser: ${downloadUrl}`);

        window.open(downloadUrl, '_blank');
    } catch (error) {
      console.error(`Error: ${error instanceof Error ? error.message : error}`);
    }  
  }
    return (
        <button
        onClick={() => downloadLatestZipAsset()}
        className="flex gap-2 items-center p-3 px-14 text-lg rounded-xl border-2 border-dashed transition-all duration-200 border-white/50 bg-button hover:border-blue">
          <DownloadIcon className="size-5"/>
          Скачать SP.zip
        </button>
    )
}