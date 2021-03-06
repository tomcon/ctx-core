import  env
      , { assign__env
        , $env__process
        , throw__missing__env} from 'ctx-core/env'
const AWS_REGION =
        env.AWS_REGION
        || $env__process('AWS_REGION')
        || 'us-east-1'
if (!env.AWS_ACCESS_KEY_ID)
  throw__missing__env('AWS_ACCESS_KEY_ID')
if (!env.AWS_SECRET_ACCESS_KEY)
  throw__missing__env('AWS_SECRET_ACCESS_KEY')
assign__env({ AWS_REGION })
export default env