import React, { useState } from "react";
import UploadInput from "../../components/commons/UploadInput";
import TextInput from "../../components/commons/TextInput";
import Dropdown from "../../components/commons/Dropdown";
import Button from "../../components/commons/Button";
import DialogConfirmation from "../../components/dialogs/DialogConfirmation";

const PersonalInformation = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const options = [
    { value: "", label: "Select your gender" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleDropdownChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <br />
      <DialogConfirmation
        open={openDialog === "error"}
        onClose={() => setOpenDialog(null)}
        type="failed"
        title="Failed"
        message="Your booking could not be completed due to error from payment getaway"
        buttonText="Try Again"
        onButtonClick={() => setOpenDialog(null)}
      />
      <div className="flex items-center gap-6 lg:gap-8">
        <UploadInput
          onFileSelect={(file) => console.log("Selected file:", file)}
          className="custom-upload-class !h-[140px] !w-[140px] lg:!h-[220px] lg:!w-[220px] "
          titleClassName="hidden"
          subtitleClassName="hidden"
          iconClassName="max-w-[36px] lg:max-w-[36px]"
        />

        <div>
          <h4 className="font-aero  uppercase text-xl lg:text-[36px] text-white">
            Upload Photo
          </h4>
          <span className="text-white/60 text-[10px] lg:text-sm mt-3 block">
            At least 256 x 256, PNG or JPG file format. <br /> Max 20 MB
          </span>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col lg:flex-row gap-5 w-full mt-5 lg:mt-8">
        <label className="w-full  text-white">
          <span className="text-base lg:text-xl mb-3 block">Display Name</span>
          <TextInput
            placeholder="Enter your name"
            inputClassName="placeholder:text-white/60"
          />
        </label>
        <label className="w-full text-white">
          <span className="text-base lg:text-xl mb-3 block">User name</span>
          <TextInput
            placeholder="Enter your name"
            inputClassName="placeholder:text-white/60"
          />
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full mt-5 lg:mt-8">
        <label className="w-full  text-white">
          <span className="text-base lg:text-xl mb-3 block">Gender</span>
          <Dropdown
            options={options}
            placeholder="Select your gender"
            onChange={handleDropdownChange}
            className="w-full "
          />
        </label>
        <label className="w-full text-white">
          <span className="text-base lg:text-xl mb-3 block">Date of birth</span>
          <TextInput
            placeholder="00 / 00 / 00"
            inputClassName="placeholder:text-white/60"
            endIcon={<img src="/assets/icons/icon-date.svg" />}
          />
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full mt-5 lg:mt-8">
        <label className="w-full  text-white">
          <span className="text-base lg:text-xl mb-3 block">Email</span>
          <TextInput
            placeholder="Enter your email"
            inputClassName="placeholder:text-white/60"
          />
        </label>
        <label className="w-full text-white">
          <span className="text-base lg:text-xl mb-3 block">Phone number</span>
          <TextInput
            placeholder="Enter your phone number"
            inputClassName="placeholder:text-white/60"
          />
        </label>
      </div>

      <div className="w-full flex justify-center mt-10 lg:mt-20">
        <Button
          isActive
          divClassName="w-full lg:max-w-[300px]"
          onClick={() => setOpenDialog("error")}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default PersonalInformation;
