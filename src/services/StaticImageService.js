import { ApiConstants } from "../constants";

const getFlagIcon= (country='kenya')=>`${ApiConstants.COUNTRY_FLAG.BASE_URL}/${country}`;

export default {getFlagIcon};