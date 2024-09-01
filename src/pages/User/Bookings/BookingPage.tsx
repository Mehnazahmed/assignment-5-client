import CustomTimePicker from "@/components/form/CustomTimePicker";
import { Button } from "@/components/ui/button";
import { useGetAvailableSlotsQuery } from "@/redux/features/facility/facility.api";
import { Card, Col, DatePicker, List, Modal, Row, Typography } from "antd";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { useCreateBookingMutation } from "@/redux/features/booking/booking.api";
import { toast } from "sonner";
import { TUser } from "@/types/user.type";
const { Title, Text } = Typography;

type TSlot = {
  start: string;
  end: string;
};

interface FormData {
  startTime?: { format: (format: string) => string };
  endTime?: { format: (format: string) => string };
}

const BookingPage = () => {
  const [createBooking] = useCreateBookingMutation();
  const token = useAppSelector(useCurrentToken);

  let user: TUser | undefined | null = undefined;

  if (token) {
    user = verifyToken(token);
  }
  console.log(user);

  const methods = useForm();
  const { control, handleSubmit, watch } = methods;
  const location = useLocation();
  const facility = location.state?.facility;
  const facilityId = facility?._id;

  // State to store formatted date and time
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  // Watch date and time fields
  const dateField = watch("date");

  useEffect(() => {
    if (dateField) {
      setFormattedDate(dateField.format("YYYY-MM-DD"));
    }
  }, [dateField]);

  // Perform API query when formattedDate or facilityId changes
  const {
    data: availableSlots,
    error,
    isLoading,
  } = useGetAvailableSlotsQuery({
    date: formattedDate,
    facilityId,
  });
  const slots = availableSlots?.data?.availableSlots;
  //   console.log(slots, error);

  //modal trigger
  useEffect(() => {
    if (slots && slots.length > 0) {
      setIsModalVisible(true);
    }
  }, [slots]);

  const onSubmit = async (data: FormData) => {
    const startTime = data.startTime?.format("HH:mm");
    const endTime = data.endTime?.format("HH:mm");
    const date = formattedDate;
    const facility = facilityId;
    const userId = user?.userId;

    const bookingData = {
      startTime,
      endTime,
      date,
      facility,
      userId,
    };

    // console.log("Booking Data:", bookingData);

    try {
      const result = await createBooking(bookingData).unwrap();
      if (result.success) {
        console.log("Booking created successfully", result);
        toast("Booking created successfully");
        window.location.href = result.data.payment_url;
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      toast("Booking created successfully");
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Title level={2} style={{ textAlign: "center", color: "fff" }}>
          Booking <span style={{ color: "#F95924" }}>Page</span>
        </Title>

        <Card>
          <Title level={4}>{facility?.name}</Title>
          <Title level={4}>{facility?.location}</Title>

          <Text
            style={{ color: "#F95924", fontSize: "20px", fontWeight: "bold" }}
          >
            ${facility.pricePerHour}
          </Text>
        </Card>

        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={16}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  style={{ width: "100%" }}
                  format="YYYY/MM/DD"
                  {...field}
                />
              )}
            />
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <CustomTimePicker label="Start Time" name="startTime" />
          </Col>
          <Col span={12}>
            <CustomTimePicker label="End Time" name="endTime" />
          </Col>
        </Row>
        {isLoading && <Text>Loading slots...</Text>}
        <Modal
          title="Available Time Slots"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {error && <Text type="danger">Error fetching available slots</Text>}
          <List
            bordered
            dataSource={slots}
            renderItem={(slot: TSlot) => (
              <List.Item>
                <Text>{`${slot?.start} - ${slot?.end}`}</Text>
              </List.Item>
            )}
          />
        </Modal>

        <Button
          onClick={handleSubmit(onSubmit)}
          className="bg-[#F95924] mr-4 text-white w-full hover:bg-[rgb(9,20,35)] border-2 border-transparent hover:border-[#F95924] transition-colors"
        >
          Proceed to Pay
        </Button>
      </div>
    </FormProvider>
  );
};

export default BookingPage;
