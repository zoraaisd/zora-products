const chartHeights = [32, 52, 44, 68, 58, 84, 70, 88, 76];

const CareloopDashboardPreview: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-500 text-sm font-black text-white">
            CL
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">CareLoop</p>
            <p className="text-xs text-slate-500">Clinic operations dashboard</p>
          </div>
        </div>
        <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
          May 1 - May 31
        </div>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[190px_1fr]">
        <div className="rounded-[22px] border border-slate-100 bg-slate-50/90 p-3">
          <div className="space-y-2">
            {[
              "Dashboard",
              "Patients",
              "Appointments",
              "Doctors",
              "Prescriptions",
              "Reports",
              "Subscriptions",
              "Settings",
              "Support",
            ].map(
              (item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl px-3 py-2 text-sm font-medium ${
                    index === 0
                      ? "bg-indigo-500 text-white shadow-[0_10px_22px_rgba(99,102,241,0.24)]"
                      : "text-slate-600"
                  }`}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Total Patients", "25,430"],
              ["Appointments", "1,245"],
              ["Total Revenue", "$24,580"],
              ["Subscriptions", "56"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_12px_24px_rgba(148,163,184,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-slate-500">{label}</p>
                  <div
                    className={`h-9 w-9 rounded-2xl ${
                      index % 2 === 0 ? "bg-teal-50" : "bg-indigo-50"
                    }`}
                  />
                </div>
                <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-xs text-emerald-500">+5% from last month</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.35fr_0.85fr]">
            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Revenue Overview</p>
                  <p className="text-xs text-slate-500">This Month</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Monthly
                </div>
              </div>
              <div className="mt-5 flex h-40 items-end gap-2">
                {chartHeights.map((height, index) => (
                  <div
                    key={height + index}
                    className="flex-1 rounded-t-[16px] bg-gradient-to-t from-indigo-500 via-sky-400 to-teal-300"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Subscription Status</p>
              <div className="mt-5 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#14b8a6_0deg_235deg,#f59e0b_235deg_305deg,#e2e8f0_305deg_360deg)]">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-slate-950">
                    <span className="text-3xl font-black">128</span>
                    <span className="text-xs text-slate-500">Total</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Active</span>
                  <span>96</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Expiring Soon</span>
                  <span>18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Expired</span>
                  <span>14</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Recent Activities</p>
              <div className="mt-4 space-y-3">
                {[
                  "New patient registered by Dr. Smith",
                  "Appointment booked with Dr. John",
                  "Prescription sent to John Doe",
                  "Payment received from Clinic Care",
                  "Subscription plan renewed",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Today's Appointments</p>
              <div className="mt-4 space-y-3">
                {[
                  ["09:30 AM", "Acme Checkup"],
                  ["10:15 AM", "Sarah White"],
                  ["11:00 AM", "Cleveland Brown"],
                  ["12:00 PM", "Dental Checkup"],
                ].map(([time, patient]) => (
                  <div
                    key={time}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">{time}</p>
                      <p className="text-xs text-slate-500">{patient}</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareloopDashboardPreview;
