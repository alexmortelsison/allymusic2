import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

export default function Watch() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex border items-center w-[300px] rounded-4xl justify-center cursor-pointer">
          <Play className="text-white" />
          <button className=" text-white text-xl px-8 py-4">
            Watch Latest Single
          </button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          <video src="/vid.mp4" loop autoPlay={true} className="rounded-md" />
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
