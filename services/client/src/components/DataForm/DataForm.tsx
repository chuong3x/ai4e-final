import {
    Button,
    FormLabel,
    Input,
    Box,
    Divider,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { useSubmitDataMutation } from "../../rtk/queries/submit.api";

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
            tOutside: "",
            hOutside: "",
            pressure: "",
            windSpeed: "",
            visibility: "",
            tdewpoint: "",
            r1: Math.random() * 50,
            r2: Math.random() * 50,
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
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
                        <FormLabel
                            htmlFor="hLeaving"
                            m="0"
                            m="0"
                            fontSize={"14px"}
                        >
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
                        <FormLabel
                            htmlFor="tOutsideBuilding"
                            m="0"
                            fontSize={"14px"}
                        >
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
                    <VStack spacing="0" align={"start"}>
                        <FormLabel
                            htmlFor="hOutsideBuilding"
                            m="0"
                            fontSize={"14px"}
                        >
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
                </VStack>
                <VStack spacing="0" align={"start"}>
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
                        <FormLabel htmlFor="tOutside" m="0" fontSize={"14px"}>
                            Outside Temperature
                        </FormLabel>
                        <Input
                            id="tOutside"
                            name="tOutside"
                            type="number"
                            isRequired={true}
                            onChange={formik.handleChange}
                            value={formik.values.tOutside}
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
            <Button type="submit" mt="2">
                Submit
            </Button>
        </Box>
    );
};

export default DataForm;
