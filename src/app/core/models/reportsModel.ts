export class ReportsModel {
  // public Id: number = 0;

  // public User_Name: string = '';
  // public Role_ID: number = 0;
  // public User_Pass: string = '';
  // public Confirm_Pass: string = '';

  public SlipSrNo: number = 0;
  public Weighbridge: string = '';
  public Trans_Date: Date;
  public Trans_Time: string = '';
  public Vehicle_No: string = '';
  public DC_No: string = '';
  public Act_Shift: string = '';
  public Area: Number = 0;
  public Ward: string = '';
  public Zone_Name: string = '';
  public Section_Name: string = '';
  public Prog_Code: string = '';
  public Route: number = 0;
  public ColPt: number = 0;
  public Trip_No: number = 0;
  public Gross_Weight: number = 0;
  public Net_Weight: number = 0;
  public canc: number = 0;
  public DeliveryLocation: string = '';
  public Updatedby: string = '';
  public TPC_Cover: number = 0;
  public On_BMC_Duty: number = 0;
  public Hold: number = 0;
  public Trans_Date_UL: Date;
  public Trans_Time_UL: string = '';
  public Unladen_Weight: number = 0;
  public Updatedby_UL: string = '';
  public Act_Net_Weight: number = 0;
  public Weighbridge_UL: string = '';
  public Act_Shift_UL: string = '';
  public Paid_GatePass: string = '';
  public VehicleType: string = '';
  public PrintedTrue: number;
  public In_Vehicle_Image: string = '';
  public Out_Vehicle_Image: string = '';
  public VerifiedBy: string = '';
  public VerifiedDate: string = '';
  public AuthorizedBy: string = '';
  public AuthorizedDate: string = '';
  public VerifiedStatus: string = '';
  public AuthorizedStatus: string = '';
  public Remark: string = '';
  public NotificationStatus: number = 0;
  public Work_code: string = '';
  public WBID: number = 0;
  public BillableNetWeight: number = 0;
  public BillableGrossWeight: number = 0;
  public BillableUnladenWeight: number = 0;
  public SlipSrNoNew: string = '';
  public SlipSrNoOld: string = '';
  public FormDate: Date;
  public todate: Date;
  public selectNallah: string = '';
  public reportType: number = 0;

  public Gross_Weight_From: number = 0.0;
  public Gross_Weight_To: number = 0.0;
  public agencyName: string = '';
  public TypeOfGarbage: string = '';
  public ShiftTimeFrom: string = '';
  public ShiftTimeTo: string = '';
  public CreatedBy: string = '';
  public CreatedDate: string = '';
  public modifiedBy: string = '';
  public modifiedDate: string = '';

  public viewName = 'Reports';
}