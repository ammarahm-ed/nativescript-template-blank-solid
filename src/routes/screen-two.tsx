import { useRouter } from "../router";

export const ScreenTwo = () => {
  const router = useRouter();

  return (
    <>
      <actionbar title="Screen Two" />
      <flexboxlayout
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <button
          text="Go Back"
          on:tap={() => {
            router.goBack();
          }}
        />
      </flexboxlayout>c
    </>
  );
};
