# LoanEzz: Loan Management Web Application

LoanEzz is a comprehensive loan management web application designed to streamline the loan process within organizations. The application facilitates efficient communication between employees seeking loans and managers responsible for loan approvals. The project is built using Spring Boot for the backend, React.js for the frontend, and MariaDB as the database.

## Features

### User Module
- View Loans: Employees can easily view their existing loan information.
- Apply Loans: Employees have the capability to submit loan applications through a user-friendly interface.
- View Items Purchased: Employees can monitor their purchased items related to the loans.

### Admin Module
- Manage Employees: Administrators have the authority to oversee employee data and manage their access to the system.
- Add Loans: Administrators can add new loan options to the system, customizing the loan offerings.
- Item Master Data: Admins have control over the item master data, which includes details of items available for purchase through loans.

## Installation and Setup

### Backend Setup (Spring Boot)
1. Install Eclipse IDE from [https://www.eclipse.org/downloads/](https://www.eclipse.org/downloads/).
2. Clone the LoanEzz repository to your local machine.
3. Open Eclipse and import the backend project into the workspace.
4. Configure the database connection in the `application.properties` file.
5. Build and run the Spring Boot application.

### Database Setup (MariaDB)
1. Install MariaDB by following the instructions on [https://mariadb.org/download/](https://mariadb.org/download/).
2. Create a new database named "LoanEzz" using your preferred database management tool.
3. Update the database configuration in the backend `application.properties` file.

### Frontend Setup (React.js)
1. Install Node.js and npm from [https://nodejs.org/](https://nodejs.org/).
2. Clone the LoanEzz repository (if not done already).
3. Navigate to the `frontend` directory in your terminal.
4. Run the command `npm install` to install the required dependencies.
5. Update the API endpoint in the React app (if needed) to match your backend server's address.
6. Start the React app using the command `npm start`.

## Usage

1. As an employee, log in to the User Module to view loans, apply for loans, and manage purchased items.
2. As an admin, access the Admin Module to manage employees, define loan options, and update item master data.

## Contributing

Contributions are welcome! If you'd like to contribute to LoanEzz, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

LoanEzz is open-source software licensed under the [MIT License](LICENSE).

---

Feel free to fork, modify, and enhance LoanEzz according to your organization's needs. If you encounter any issues or have suggestions, please open an issue on the repository. We appreciate your interest in LoanEzz!
