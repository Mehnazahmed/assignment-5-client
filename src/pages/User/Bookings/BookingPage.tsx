import { Button } from "@/components/ui/button";
import { useGetAvailableSlotsQuery } from "@/redux/features/facility/facility.api";
import {
  Card,
  Col,
  DatePicker,
  Input,
  List,
  Modal,
  Row,
  Typography,
} from "antd";
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
  startTime: string;
  endTime: string;
};

// interface FormData {
//   startTime?: string;
//   endTime?: string;
// }

const BookingPage = () => {
  const [createBooking] = useCreateBookingMutation();
  const token = useAppSelector(useCurrentToken);

  let user: TUser | undefined | null = undefined;

  if (token) {
    user = verifyToken(token) as TUser | null;
  }

  const methods = useForm();
  const { control, handleSubmit, watch } = methods;
  const location = useLocation();
  const facility = location.state?.facility;
  const facilityId = facility?._id;

  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TSlot | null>(null); // Store selected slot

  const dateField = watch("date");

  useEffect(() => {
    if (dateField) {
      setFormattedDate(dateField.format("YYYY-MM-DD"));
    }
  }, [dateField]);

  const {
    data: availableSlots,
    error,
    isLoading,
  } = useGetAvailableSlotsQuery({
    date: formattedDate,
    facilityId,
  });

  useEffect(() => {
    if (availableSlots?.data?.length > 0) {
      setIsModalVisible(true);
    }
  }, [availableSlots]);

  const onSubmit = async () => {
    if (!selectedSlot) {
      toast("Please select a time slot");
      return;
    }

    const { startTime, endTime } = selectedSlot;
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

    try {
      const result = await createBooking(bookingData).unwrap();
      if (result.success) {
        toast("Booking created successfully");
        window.location.href = result.data.payment_url;
      }
    } catch (error) {
      if (error instanceof Error) {
        toast("Error creating Booking");
      }
    }
  };

  // Handle slot selection
  const handleSlotSelection = (slot: TSlot) => {
    setSelectedSlot(slot); // Set the selected slot
    setIsModalVisible(false); // Close the modal after selection
  };

  return (
    <FormProvider {...methods}>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <Title level={2} style={{ textAlign: "center", color: "white" }}>
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

        <Row gutter={16} style={{ marginTop: "10px", marginBottom: "20px" }}>
          <Col span={16}>
            <Text
              strong
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                display: "block",
                color: "white",
              }}
            >
              Pick a Date:
            </Text>
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
            dataSource={availableSlots?.data || []}
            renderItem={(slot: TSlot) => (
              <List.Item
                onClick={() => handleSlotSelection(slot)}
                style={{ cursor: "pointer" }}
              >
                <Text>{`${slot.startTime} - ${slot.endTime}`}</Text>
              </List.Item>
            )}
          />
        </Modal>

        {selectedSlot && (
          <Row gutter={16} style={{ marginTop: "10px", marginBottom: "20px" }}>
            <Col span={16}>
              <Text
                strong
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  display: "block",
                  color: "white",
                }}
              >
                Selected Time Slot:
              </Text>
              <Input
                value={`${selectedSlot.startTime} - ${selectedSlot.endTime}`} // Display selected time slot in Input
                readOnly
              />
            </Col>
          </Row>
        )}

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
