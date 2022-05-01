import mongoose from 'mongoose';
import hostsSchema from "./hosts-schema.js";
const hostsModel = mongoose.model(
    'HostsModel',
    hostsSchema
)
export default hostsModel;
