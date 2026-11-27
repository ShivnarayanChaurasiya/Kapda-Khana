
import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  Users,
  ChartNoAxesCombined,
  Settings,
  LogOut,
  Menu,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Package,
  IndianRupee,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Products", icon: ShoppingBag },
  { name: "Orders", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Analytics", icon: ChartNoAxesCombined },
];

const stats = [
  {
    title: "Total Revenue",
    value: "₹2,45,890",
    change: "+12.5%",
    icon: IndianRupee,
  },
  {
    title: "Total Orders",
    value: "1,245",
    change: "+8.2%",
    icon: ShoppingCart,
  },
  {
    title: "Total Products",
    value: "356",
    change: "+5.4%",
    icon: Package,
  },
  {
    title: "Total Customers",
    value: "2,845",
    change: "+15.8%",
    icon: Users,
  },
];

const orders = [
  {
    id: "#KK1001",
    customer: "Rahul Sharma",
    product: "Oversized Black T-Shirt",
    date: "27 Nov 2026",
    amount: "₹1,299",
    status: "Delivered",
  },
  {
    id: "#KK1002",
    customer: "Priya Verma",
    product: "Classic Denim Jacket",
    date: "27 Nov 2026",
    amount: "₹2,499",
    status: "Processing",
  },
  {
    id: "#KK1003",
    customer: "Aman Singh",
    product: "Streetwear Hoodie",
    date: "26 Nov 2026",
    amount: "₹1,899",
    status: "Pending",
  },
  {
    id: "#KK1004",
    customer: "Neha Gupta",
    product: "Cargo Pants",
    date: "26 Nov 2026",
    amount: "₹1,599",
    status: "Delivered",
  },
];

function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    `${order.id} ${order.customer} ${order.product}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleLogout = () => {
    // Actual logout will be connected with backend authentication.
    window.location.href = "/login";
  };

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-logo">
          <ShoppingBag size={25} />
          <span>KAPDA <b>KHANA</b></span>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="admin-sidebar-label">
          MAIN MENU
        </div>

        <nav className="admin-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`admin-nav-item ${
                  activeMenu === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActiveMenu(item.name);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-label">PREFERENCES</div>

          <button
            className={`admin-nav-item ${
              activeMenu === "Settings" ? "active" : ""
            }`}
            onClick={() => setActiveMenu("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>

          <button
            className="admin-nav-item logout-button"
            onClick={handleLogout}
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>

        <div className="admin-sidebar-footer">
          <div className="admin-avatar">A</div>
          <div>
            <strong>Store Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="admin-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="admin-main">

        <header className="admin-header">
          <div className="admin-header-left">
            <button
              className="admin-menu-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <span className="admin-breadcrumb">
                KAPDA KHANA / ADMIN
              </span>
              <h1>{activeMenu}</h1>
            </div>
          </div>

          <div className="admin-header-actions">
            <button className="admin-icon-button" aria-label="Notifications">
              <Bell size={20} />
              <span className="notification-dot" />
            </button>

            <div className="admin-header-profile">
              <div className="admin-avatar">A</div>
              <div>
                <strong>Admin</strong>
                <span>Store Manager</span>
              </div>
            </div>
          </div>
        </header>

        {activeMenu === "Overview" ? (
          <div className="admin-content">

            <section className="admin-welcome">
              <div>
                <span>WELCOME BACK 👋</span>
                <h2>Here's what's happening with your store.</h2>
                <p>Track your store performance and recent activity.</p>
              </div>

              <button
                className="admin-primary-button"
                onClick={() => setActiveMenu("Products")}
              >
                <Plus size={17} />
                Manage Products
              </button>
            </section>

            {/* Stats */}
            <section className="admin-stats-grid">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="admin-stat-card" key={stat.title}>
                    <div className="admin-stat-top">
                      <span>{stat.title}</span>
                      <div className="admin-stat-icon">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3>{stat.value}</h3>

                    <div className="admin-stat-change">
                      <TrendingUp size={15} />
                      {stat.change}
                      <span>vs last month</span>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Analytics */}
            <section className="admin-analytics-grid">
              <div className="admin-panel revenue-panel">
                <div className="admin-panel-header">
                  <div>
                    <h3>Revenue Overview</h3>
                    <p>Monthly sales performance</p>
                  </div>

                  <select defaultValue="2026">
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                  </select>
                </div>

                <div className="revenue-highlight">
                  <h2>₹2,45,890</h2>
                  <span>+12.5% this month</span>
                </div>

                <div className="revenue-chart">
                  {[40, 65, 48, 78, 55, 90, 68, 85, 58, 75, 95, 82].map(
                    (height, index) => (
                      <div className="chart-column" key={index}>
                        <div
                          className="chart-bar"
                          style={{ height: `${height}%` }}
                        />
                        <span>
                          {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="admin-panel quick-panel">
                <h3>Quick Actions</h3>
                <p>Manage your online store</p>

                <button onClick={() => setActiveMenu("Products")}>
                  <ShoppingBag size={19} />
                  <span>
                    <strong>Products</strong>
                    <small>Manage your collection</small>
                  </span>
                  <ArrowUpRight size={17} />
                </button>

                <button onClick={() => setActiveMenu("Orders")}>
                  <ShoppingCart size={19} />
                  <span>
                    <strong>Orders</strong>
                    <small>View customer orders</small>
                  </span>
                  <ArrowUpRight size={17} />
                </button>

                <button onClick={() => setActiveMenu("Customers")}>
                  <Users size={19} />
                  <span>
                    <strong>Customers</strong>
                    <small>Manage customers</small>
                  </span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </section>

            {/* Orders */}
            <section className="admin-panel admin-orders-panel">
              <div className="admin-panel-header">
                <div>
                  <h3>Recent Orders</h3>
                  <p>Latest transactions from your store</p>
                </div>

                <button
                  className="admin-view-all"
                  onClick={() => setActiveMenu("Orders")}
                >
                  View All →
                </button>
              </div>

              <div className="admin-table-search">
                <Search size={17} />
                <input
                  placeholder="Search orders or customers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td><strong>{order.id}</strong></td>
                        <td>{order.customer}</td>
                        <td>{order.product}</td>
                        <td>{order.date}</td>
                        <td><strong>{order.amount}</strong></td>
                        <td>
                          <span
                            className={`order-status ${order.status.toLowerCase()}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}

                    {filteredOrders.length === 0 && (
                      <tr>
                        <td colSpan="6">No matching orders found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        ) : (
          <section className="admin-panel admin-placeholder">
            <div className="admin-stat-icon">
              {activeMenu === "Products" && <ShoppingBag size={25} />}
              {activeMenu === "Orders" && <ShoppingCart size={25} />}
              {activeMenu === "Customers" && <Users size={25} />}
              {activeMenu === "Analytics" && <ChartNoAxesCombined size={25} />}
              {activeMenu === "Settings" && <Settings size={25} />}
            </div>

            <h2>{activeMenu} Management</h2>
            <p>
              This section is ready for its next development step.
              We will add its complete functionality next.
            </p>

            <button
              className="admin-primary-button"
              onClick={() => setActiveMenu("Overview")}
            >
              Back to Overview
            </button>
          </section>
        )}

      </main>
    </div>
  );
}

export default AdminDashboard;
