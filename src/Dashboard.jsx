import Icons from "./assets/icons";
import styles from "./dashboard.module.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import HospitalCard from "./components/hospitalCard/HospitalCard";
import StatusCard from "./components/statusCard/StatusCard";
import { useState } from "react";
import TableCard from "./components/tableCard/TableCard";
import Incident from "./components/incident/Incident";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Day");

  const incidentData = [
    { period: "Jan", value: 40 },
    { period: "Feb", value: 65 },
    { period: "Mar", value: 30 },
    { period: "Apr", value: 80 },
    { period: "May", value: 45 },
    { period: "Jun", value: 70 },
  ];

  const maxValue = Math.max(...incidentData.map((item) => item.value));

  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.mainContent}>
        <Header />
        <main className={styles.dashboardContent}>
          <div className={styles.container}>
            <HospitalCard />

            <div className={styles.statusCards}>
              <StatusCard
                icon={"TrendingUp"}
                color={"blue"}
                label={"Assets"}
                value={"487"}
              />
              <StatusCard
                icon={"AlertCircle"}
                color={"red"}
                label={"Not Working"}
                value={"24"}
              />
              <StatusCard
                icon={"Trash2"}
                color={"orange"}
                label={"Discarded"}
                value={"18"}
              />
              <StatusCard
                icon={"Building2"}
                color={"green"}
                label={"Department"}
                value={"12"}
              />
            </div>

            <div className={styles.bottomSection}>
              <div className={styles.infoCard}>
                <div className={styles.infoCard__header}>
                  <div className={styles.infoCard__title}>
                    <div className={styles.statusIndicator}></div>
                    <h3>Cumulative Downtime</h3>
                  </div>
                  <Icons.MoreHorizontal className={styles.moreIcon} />
                </div>
                <div className={styles.infoCard__subtitle}>
                  Time wasted due to downtime
                </div>
                <div className={styles.infoCard__value}>17:45:30</div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCard__header}>
                  <div className={styles.trackingHeader}>
                    <div className={styles.trackingIcon}>
                      <Icons.Package size={16} />
                    </div>
                    <div className={styles.trackingInfo}>
                      <h3>User Asset Tracking 2.0</h3>
                      <span className={styles.newBadge}>New</span>
                    </div>
                  </div>
                  <Icons.MoreHorizontal className={styles.moreIcon} />
                </div>
                <div className={styles.infoCard__subtitle}>
                  Update tracking for monitoring and maintenance
                </div>
                <div className={styles.userAvatars}>
                  <div className={styles.avatarGroup}>
                    <div className="avatar avatar--pink"></div>
                    <div className="avatar avatar--blue"></div>
                    <div className="avatar avatar--green"></div>
                    <div className="avatar avatar--yellow"></div>
                  </div>
                  <span className={styles.avatarCount}>+3</span>
                </div>
                <button className={styles.learnMoreBtn}>Learn More →</button>
              </div>

              <div className={styles.placeholderCard}>
                <div className={styles.placeholderHeader}>
                  <Icons.Package />
                  <span>XXXXXXXXXXXXXXX</span>
                </div>
                <div className={styles.placeholderContent}>
                  <div className={styles.placeholderText}>XXXXXXXXXXX</div>
                  <div className={styles.placeholderText}>XXXXXXXXXXX</div>
                </div>
                <Icons.MoreHorizontal className={styles.placeholderMore} />
              </div>
            </div>
            <div className={styles.dashboard__grid}>
              <Incident />

              {/* Warranty Status Card */}
              <div className={styles.dashboard__card}>
                <div className={styles.warranty__header}>
                  <h2>Calibration Status</h2>
                  <div className={styles.warranty__headerDate}>📅 Mar 2025</div>
                </div>

                <div className={styles.warranty__chartContainer}>
                  <div className={styles.warranty__donut}></div>
                </div>

                <div className={styles.warranty__stats}>
                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--total">
                      ✓
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--total">
                      45%
                    </p>
                    <p className={styles.warranty__statLabel}>Calibration</p>
                  </div>

                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--expires">
                      ⚠
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--expires">
                      35%
                    </p>
                    <p className={styles.warranty__statLabel}>Not Calibrated</p>
                  </div>

                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--requested">
                      ⊖
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--requested">
                      20%
                    </p>
                    <p className={styles.warranty__statLabel}>Not Required</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dashboard__grid}>
              <Incident />

              {/* Warranty Status Card */}
              <div className={styles.dashboard__card}>
                <div className={styles.warranty__header}>
                  <h2>Warranty Status</h2>
                  <div className={styles.warranty__headerDate}>📅 Mar 2025</div>
                </div>

                <div className={styles.warranty__chartContainer}>
                  <div className={styles.warranty__donut}></div>
                </div>

                <div className={styles.warranty__stats}>
                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--total">
                      ✓
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--total">
                      50%
                    </p>
                    <p className={styles.warranty__statLabel}>Total</p>
                  </div>

                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--expires">
                      ⚠
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--expires">
                      30%
                    </p>
                    <p className={styles.warranty__statLabel}>Expires Soon</p>
                  </div>

                  <div className={styles.warranty__stat}>
                    <div className="warranty__stat-icon warranty__stat-icon--requested">
                      ⊖
                    </div>
                    <p className="warranty__stat-value warranty__stat-value--requested">
                      20%
                    </p>
                    <p className={styles.warranty__statLabel}>Requested</p>
                  </div>
                </div>
              </div>
            </div>
            <TableCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
