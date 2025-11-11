import { AlertInfo, AlertSuccess,AlertWarning,AlertDanger} from "@/components/alert";


const TestAlert = () => {
   return(
       <div className="m-10">
           <AlertInfo title="Test Alert" type="info">
               This is a test alert
           </AlertInfo>

           <AlertSuccess title="Success!" type="Success">
               This is a test alert
           </AlertSuccess>

           <AlertWarning title="Warning" type="Warning!">
               This is a test alert
           </AlertWarning>

           <AlertDanger title="Danger!" type="Danger!">
               This is a test alert
           </AlertDanger>

           
           
       </div>
   )
}



       