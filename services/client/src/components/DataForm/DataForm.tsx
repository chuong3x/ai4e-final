import {
  Button,
  FormLabel,
  Input,
  Box,
  Divider,
  HStack,
  VStack,
  useToast,
  ToastId,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { useSubmitDataMutation } from "../../rtk/queries/submit.api";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import { set } from "../../rtk/slices/counter.slice";

const DataForm: React.FC = () => {
  const [submitApi, submitApiResult] = useSubmitDataMutation();
  const formik = useFormik({
    initialValues: {
      light: "",
      tKitchen: "",
      hKitchen: "",
      tLeaving: "",
      hLeaving: "",
      tLaundry: "",
      hLaundry: "",
      tOffice: "",
      hOffice: "",
      tBathroom: "",
      hBathroom: "",
      tOutsideBuilding: "",
      hOutsideBuilding: "",
      tIroning: "",
      hIroning: "",
      tTeenager: "",
      hTeenager: "",
      tParents: "",
      hParents: "",
      hOutside: "",
      pressure: "",
      windSpeed: "",
      visibility: "",
      tdewpoint: "",
      r1: Math.random() * 50,
      r2: Math.random() * 50,
    },
    onSubmit: (values) => {
      submitApi({ features: Object.values(values).map((x) => Number(x)) });
    },
  });
  const dispatch = useAppDispatch();
  const toast = useToast();
  const toastId = useRef<ToastId>();
  const handleGenerate = () => {
    formik.setValues({
      light: (Math.random() * 70).toFixed(2),
      tKitchen: (Math.random() * (26.26 - 16.79) + 16.79).toFixed(2),
      hKitchen: (Math.random() * (63.36 - 27.023333) + 27.023333).toFixed(2),
      tLeaving: (Math.random() * (29.85 - 16.1) + 16.1).toFixed(2),
      hLeaving: (Math.random() * (56.026667 - 20.463333) + 20.463333).toFixed(
        2
      ),
      tLaundry: (Math.random() * (29.236 - 17.2) + 17.2).toFixed(2),
      hLaundry: (Math.random() * (50.163333 - 28.766667) + 28.766667).toFixed(
        2
      ),
      tOffice: (Math.random() * (26.2 - 15.1) + 15.1).toFixed(2),
      hOffice: (Math.random() * (51.09 - 27.66) + 27.66).toFixed(2),
      tBathroom: (Math.random() * (25.795 - 15.33) + 15.33).toFixed(2),
      hBathroom: (Math.random() * (96.321667 - 29.815) + 29.815).toFixed(2),
      tOutsideBuilding: (Math.random() * (28.29 - -6.065) + -6.065).toFixed(2),
      hOutsideBuilding: (Math.random() * (99.9 - 1) + 1).toFixed(2),
      tIroning: (Math.random() * (26.0 - 15.39) + 15.39).toFixed(2),
      hIroning: (Math.random() * (51.4 - 23.2) + 23.2).toFixed(2),
      tTeenager: (Math.random() * (27.23 - 16.306667) + 16.306667).toFixed(2),
      hTeenager: (Math.random() * (58.78 - 29.6) + 29.6).toFixed(2),
      tParents: (Math.random() * (24.5 - 14.89) + 14.89).toFixed(2),
      hParents: (Math.random() * (53.326667 - 29.166667) + 29.166667).toFixed(
        2
      ),
      pressure: (Math.random() * (772.3 - 729.3) + 729.3).toFixed(2),
      hOutside: (Math.random() * (100.0 - 24.0) + 24.0).toFixed(2),
      windSpeed: (Math.random() * (14.0 - 0) + 0).toFixed(2),
      visibility: (Math.random() * (66 - 1) + 1).toFixed(2),
      tdewpoint: (Math.random() * (15.5 - -6.6) + -6.6).toFixed(2),
      r1: Math.random() * 50,
      r2: Math.random() * 50,
    });
  };
  useEffect(() => {
    if (submitApiResult.isError) {
      toast({
        title: "Failed",
        status: "error",
        duration: 3000,
      });
    } else if (submitApiResult.isLoading) {
      toastId.current = toast({
        title: `Please wait...`,
      });
    } else {
      if (toastId.current) {
        toast.close(toastId.current);
      }
      if (submitApiResult.isSuccess) {
        dispatch(set(submitApiResult.data.data[0]));
      }
    }
  }, [submitApiResult]);
  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <HStack mb="2" align={"start"}>
        <VStack spacing="0" align={"start"}>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="light" m="0" fontSize={"14px"}>
              Light
            </FormLabel>
            <Input
              id="light"
              name="light"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.light}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tKitchen" m="0" fontSize={"14px"}>
              Kitchen Temperature
            </FormLabel>
            <Input
              id="tKitchen"
              name="tKitchen"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tKitchen}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hKitchen" m="0" fontSize={"14px"}>
              Kitchen Humidity
            </FormLabel>
            <Input
              id="hKitchen"
              name="hKitchen"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hKitchen}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tLeaving" m="0" fontSize={"14px"}>
              Leaving Room Temperature
            </FormLabel>
            <Input
              id="tLeaving"
              name="tLeaving"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tLeaving}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hLeaving" m="0" fontSize={"14px"}>
              Leaving Room Humidity
            </FormLabel>
            <Input
              id="hLeaving"
              name="hLeaving"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hLeaving}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tLaundry" m="0" fontSize={"14px"}>
              Laundry Room Temperature
            </FormLabel>
            <Input
              id="tLaundry"
              name="tLaundry"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tLaundry}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hLaundry" m="0" fontSize={"14px"}>
              Laundry Room Humidity
            </FormLabel>
            <Input
              id="hLaundry"
              name="hLaundry"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hLaundry}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tOffice" m="0" fontSize={"14px"}>
              Office Temperature
            </FormLabel>
            <Input
              id="tOffice"
              name="tOffice"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tOffice}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hOffice" m="0" fontSize={"14px"}>
              Office Humidity
            </FormLabel>
            <Input
              id="hOffice"
              name="hOffice"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hOffice}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tBathroom" m="0" fontSize={"14px"}>
              Bathroom Temperature
            </FormLabel>
            <Input
              id="tBathroom"
              name="tBathroom"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tBathroom}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hBathroom" m="0" fontSize={"14px"}>
              Bathroom Humidity
            </FormLabel>
            <Input
              id="hBathroom"
              name="hBathroom"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hBathroom}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tOutsideBuilding" m="0" fontSize={"14px"}>
              OutsideBuilding Temperature
            </FormLabel>
            <Input
              id="tOutsideBuilding"
              name="tOutsideBuilding"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tOutsideBuilding}
            />
          </VStack>
        </VStack>
        <VStack spacing="0" align={"start"}>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hOutsideBuilding" m="0" fontSize={"14px"}>
              OutsideBuilding Humidity
            </FormLabel>
            <Input
              id="hOutsideBuilding"
              name="hOutsideBuilding"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hOutsideBuilding}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tIroning" m="0" fontSize={"14px"}>
              Ironing Temperature
            </FormLabel>
            <Input
              id="tIroning"
              name="tIroning"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tIroning}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hIroning" m="0" fontSize={"14px"}>
              Ironing Humidity
            </FormLabel>
            <Input
              id="hIroning"
              name="hIroning"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hIroning}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tTeenager" m="0" fontSize={"14px"}>
              Teenager Temperature
            </FormLabel>
            <Input
              id="tTeenager"
              name="tTeenager"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tTeenager}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hTeenager" m="0" fontSize={"14px"}>
              Teenager Humidity
            </FormLabel>
            <Input
              id="hTeenager"
              name="hTeenager"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hTeenager}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tParents" m="0" fontSize={"14px"}>
              Parents Temperature
            </FormLabel>
            <Input
              id="tParents"
              name="tParents"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tParents}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hParents" m="0" fontSize={"14px"}>
              Parents Humidity
            </FormLabel>
            <Input
              id="hParents"
              name="hParents"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hParents}
            />
          </VStack>

          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="hOutside" m="0" fontSize={"14px"}>
              Outside Humidity
            </FormLabel>
            <Input
              id="hOutside"
              name="hOutside"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.hOutside}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="pressure" m="0" fontSize={"14px"}>
              Pressure
            </FormLabel>
            <Input
              id="pressure"
              name="pressure"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.pressure}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="windSpeed" m="0" fontSize={"14px"}>
              Wind Speed
            </FormLabel>
            <Input
              id="windSpeed"
              name="windSpeed"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.windSpeed}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="visibility" m="0" fontSize={"14px"}>
              Visibility
            </FormLabel>
            <Input
              id="visibility"
              name="visibility"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.visibility}
            />
          </VStack>
          <VStack spacing="0" align={"start"}>
            <FormLabel htmlFor="tdewpoint" m="0" fontSize={"14px"}>
              Tdewpoint
            </FormLabel>
            <Input
              id="tdewpoint"
              name="tdewpoint"
              type="number"
              isRequired={true}
              onChange={formik.handleChange}
              value={formik.values.tdewpoint}
            />
          </VStack>
        </VStack>
      </HStack>

      <Divider />
      <HStack w="full" justify="space-between">
        <Button mt="2" onClick={handleGenerate}>
          Generate
        </Button>
        <Button
          type="submit"
          mt="2"
          isLoading={submitApiResult.isLoading}
          isDisabled={Object.values(formik.values).some((x) => x === "")}
        >
          Predict
        </Button>
      </HStack>
    </Box>
  );
};

export default DataForm;
