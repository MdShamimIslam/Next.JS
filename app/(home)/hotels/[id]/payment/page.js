import PaymentForm from "@/app/components/payment/PaymentForm";
import { auth } from "@/auth";
import { getHotelById, getUserByEmail } from "@/queries/queries";
import { getDayDifference } from "@/utils/data-util";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  let totalHotelCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  const hasCheckinCheckout = checkin && checkout;
  let days = 0;
  let dayText = "";

  if (hasCheckinCheckout) {
    days = getDayDifference(checkin, checkout);
    totalHotelCost = totalHotelCost * days;
    dayText = days > 1 ? "days" : "day";
  }

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and total price is{" "}
          <b>${totalHotelCost}</b>
          {hasCheckinCheckout && ` for ${days} ${dayText}`}
        </p>
        <PaymentForm 
        loggedInUser={loggedInUser}
        hotelInfo={hotelInfo}
        checkin={checkin} 
        checkout={checkout}
        totalHotelCost={totalHotelCost}
         />
      </div>
    </section>
  );
};

export default PaymentPage;
