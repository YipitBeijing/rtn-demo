const xEmailSubjectKey = "x-emailSubject";
const xVendorIdKey = "x-vendorId";
const xPriceCurrencyKey = "x-priceCurrency";

export type Attachment = {
  id: string;
  size: number;
  fileName: string;
  contentType: [string];
  contentDisposition: string;
  fileData?: string;
  url: string;
  date?: number;
};

export type LargeAttachment = {
  aid: string;
  name: string;
  size: number;
  contentType: string;
  messageHeaderId: string;
  date: number;
  url: string;
};

export type Contact = {
  name: string;
  email: string;
};

type ContactPoint = {
  contactType: string;
  telephone: string;
  email: string;
};
type Organization = {
  contactPoint: ContactPoint[];
  name: string;
  url: string;
};
type PriceSpecification = {
  price: string;
};
type Invoice = {
  accountBalance: string;
  accountId: string;
  "x-balanceDue": PriceSpecification;
  confirmationNumber: string;
  description: string;
  [xEmailSubjectKey]: string;
  paymentDueDate: string;
  "x-paymentMade": PriceSpecification;
  paymentStatus: string;
  totalPaymentDue: PriceSpecification;
  url: string;
  [xVendorIdKey]: number;
};
type QuantitativeValue = {
  value: string;
};
type TimeRange = {
  startDate: string;
  endDate: string;
};
type PricePoint = {
  price: string;
  time: string;
};
type Product = {
  description: string;
  image: string;
  name: string;
  url: string;
  productID: string;
};
type Offer = {
  category: string;
  eligibleQuantity: QuantitativeValue;
  itemOffered: Product;
  "x-latestPrice": string;
  "x-lowestPirce": string;
  price: string;
  "x-priceHistory": PricePoint[];
  "x-priceWindow": TimeRange;
  "x-totalSaved": string;
};
type Order = {
  acceptedOffer: Offer[];
  broker: Organization;
  description: string;
  discount: string;
  [xEmailSubjectKey]: string;
  orderDate: string;
  orderNumber: string;
  partOfInvoice: Invoice;
  "x-paymentScheduled": string;
  "x-price": string;
  [xPriceCurrencyKey]: string;
  "x-purchaseType": string;
  refund: boolean;
  seller: Organization;
  "x-shipping": string;
  "x-subTota": string;
  "x-tax": string;
  [xVendorIdKey]: number;
};
type PurchaseObject = {
  acceptedOffer: Offer[];
  broker: Organization;
  description: string;
  discount: string;
  [xEmailSubjectKey]: string;
  orderNumber: string;
  partOfInvoice: {
    "x-balanceDue": PriceSpecification;
    "x-paymentMade": PriceSpecification;
    totalPaymentDue: PriceSpecification;
  };
  "x-paymentScheduled": string;
  "x-price": string;
  [xPriceCurrencyKey]: string;
  "x-purchaseType": string;
  seller: Organization;
  [xVendorIdKey]: number;
};
type ShoppingOrder = {
  acceptedOffer: {
    eligibleQuantity: {
      value: number;
    };
    itemOffered: {
      image: string;
      name: string;
    };
    price: string;
  };
  broker: Organization;
  orderNumber: string;
  seller: Organization;
};
type PriceAlert = {
  [xEmailSubjectKey]: string;
  "x-itemPriceDropped": Offer[];
  "x-linkedSiftId": string;
  partOfOrder: Order;
  [xPriceCurrencyKey]: string;
  "x-priceDropId": string;
  "x-status": string;
  [xVendorIdKey]: string;
};
type ExtendInfoObj<P> = {
  payload: P;
  domain: string;
  sift_id: number;
  email_time: number;
  account_id: string;
};
type Nudge = {
  suggestion_type: number;
  nudge_timestamp: string;
  nudge_time_str: number;
  tasks: string[];
};
type Place = {
  address: string;
  name: string;
};
type LodgingBusiness = {
  address: string;
  category: string;
  "x-days": string;
  description: string;
  deck: string;
  name: string;
  "x-rewardsLevel": string;
  "x-roomType": string;
  ship: string;
  "x-rooms": string;
  stateroom: string;
  telephone: string;
};
type Seat = {
  seatNumber: string;
  seatRow: string;
  seatingType: string;
};
type Person = {
  email: string;
  familyName: string;
  givenName: string;
  faxNumber: string;
  homeLocation: ContactPoint;
  jobTitle: string;
  name: string;
  telephone: string;
  ticketNumber: string;
  workLocation: ContactPoint;
  worksFor: Organization;
};
type Ticket = {
  description: string;
  ticketNumber: string;
  ticketToken: string;
  ticketUrl: string;
  ticketedSeat: Seat;
  underName: Person;
  url: string;
};
type LodgingReservation = {
  arrivalLocation: Place;
  arrivalTime: string;
  broker: Organization;
  checkinTime: string;
  checkoutTime: string;
  departLocation: Place;
  departureTime: string;
  [xEmailSubjectKey]: string;
  reservationFor: LodgingBusiness;
  reservationId: string;
  reservationStatus: string;
  reservedTicket: Ticket[];
  [xVendorIdKey]: number;
};
type ProgramMembershipUsed = {
  membershipNumber: string;
};
type FlightReservation = {
  broker: Organization;
  [xEmailSubjectKey]: string;
  programMembershipUsed: ProgramMembershipUsed;
  reservationFor: any;
  reservationId: string;
  reservationStatus: string;
  reservedTicket: Ticket[];
  [xVendorIdKey]: number;
};
type ParcelDelivery = {
  itemShipped: Product[];
  partOfOrder: ShoppingOrder;
  provider: Organization;
  trackingNumber: string;
  [xVendorIdKey]: string;
  trackingUrl: string;
};
type FoodEstablishment = {
  address: string;
  name: string;
  telephone: string;
};
type FoodEstablishmentReservation = {
  [xEmailSubjectKey]: string;
  partySize: string;
  provider: Organization;
  reservationFor: FoodEstablishment[];
  reservationId: string;
  reservationStatus: string;
  startTime: string;
  [xVendorIdKey]: number;
};
type EventReservation = {
  [xEmailSubjectKey]: string;
  provider: Organization;
  reservationFor: Event;
  reservedTicket: Ticket[];
  [xVendorIdKey]: 0;
};
type Car = {
  name: string;
};
type RentalCarReservation = {
  dropoffLocation: null;
  dropoffTime: string;
  [xEmailSubjectKey]: string;
  pickupLocation: Place;
  pickupTime: string;
  provider: Organization;
  reservationFor: Car;
  reservationId: string;
  reservationStatus: string;
  underName: Person;
  [xVendorIdKey]: number;
};
type TrainStation = {
  code: string;
  "x-destination": string;
  name: string;
};
type TrainTrip = {
  arrivalStation: TrainStation;
  arrivalTime: string;
  departureStation: TrainStation;
  departureTime: string;
  description: string;
  trainNumber: string;
};
type TrainReservation = {
  [xEmailSubjectKey]: string;
  provider: any[];
  reservationFor: TrainTrip[];
  reservationId: string;
  reservationStatus: string;
  reservedTicket: any[];
  [xVendorIdKey]: number;
};
type ICS = {
  attachmentId: string;
  uids: string[];
};

type Hotels = ExtendInfoObj<LodgingReservation>;
type Flights = ExtendInfoObj<FlightReservation>;
type PackageShipments = ExtendInfoObj<ParcelDelivery>;
type RestaurantReservations = ExtendInfoObj<FoodEstablishmentReservation>;
type EventConfirmations = ExtendInfoObj<EventReservation>;
type CarRentals = ExtendInfoObj<RentalCarReservation>;
type BoardingPasses = ExtendInfoObj<FlightReservation>;
type Trains = ExtendInfoObj<TrainReservation>;
type Bills = ExtendInfoObj<Invoice>;
type Cruises = ExtendInfoObj<LodgingReservation>;
type Purchase = ExtendInfoObj<PurchaseObject>;
type Sift =
  | Hotels
  | Flights
  | PackageShipments
  | RestaurantReservations
  | EventConfirmations
  | CarRentals
  | BoardingPasses
  | Trains
  | Bills
  | Cruises
  | Purchase;

export type ExtendInfo = {
  sift: Sift[];
  nudge: Nudge[];
  pricealert: ExtendInfoObj<PriceAlert>[];
  ics: ICS[];
};

export type Message = {
  id: string;
  date: number;
  snippet: string;
  html: string;
  text: string;
  labelIds: string[];
  attachments: Attachment[];
  largeAttachments: LargeAttachment[];
  extendInfo: ExtendInfo;
  subject: string;
  from: Contact;
  to: Contact[];
  cc: Contact[];
  bcc: Contact[];
  messageId: string;
  inReplyTo: string;
  references: string[];
  rrbFlag: boolean;
  ssFlag: boolean;
  sendVia?: string;
  composeId?: string;
};

export type Thread = {
  id: string;
  subject: string;
  snippet: string;
  from: Contact[];
  // This field is a second timestamp
  date: number;
  status: number;
  count: number;
  messageIds: string[];
  messages: Array<Message>;
  labelIds: string[];
};
