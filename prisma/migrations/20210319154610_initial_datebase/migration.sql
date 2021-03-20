-- CreateTable
CREATE TABLE `categories` (
    `CategoryID` INTEGER NOT NULL,
    `CategoryName` TEXT,
    `Description` TEXT,
    `Picture` BLOB,

    PRIMARY KEY (`CategoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customercustomerdemo` (
    `CustomerID` VARCHAR(255) NOT NULL,
    `CustomerTypeID` VARCHAR(255),
INDEX `CustomerTypeID`(`CustomerTypeID`),

    PRIMARY KEY (`CustomerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customerdemographics` (
    `CustomerTypeID` VARCHAR(255) NOT NULL,
    `CustomerDesc` TEXT,

    PRIMARY KEY (`CustomerTypeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `CustomerID` VARCHAR(255) NOT NULL,
    `CompanyName` TEXT NOT NULL,
    `ContactName` TEXT NOT NULL,
    `ContactTitle` TEXT NOT NULL,
    `Address` TEXT NOT NULL,
    `City` TEXT NOT NULL,
    `Region` TEXT NOT NULL,
    `PostalCode` TEXT NOT NULL,
    `Country` TEXT NOT NULL,
    `Phone` TEXT NOT NULL,
    `Fax` TEXT NOT NULL,

    PRIMARY KEY (`CustomerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `EmployeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `LastName` TEXT,
    `FirstName` TEXT,
    `Title` TEXT,
    `TitleOfCourtesy` TEXT,
    `BirthDate` DATE,
    `HireDate` DATE,
    `Address` TEXT,
    `City` TEXT,
    `Region` TEXT,
    `PostalCode` TEXT,
    `Country` TEXT,
    `HomePhone` TEXT,
    `Extension` TEXT,
    `Photo` BLOB,
    `Notes` TEXT,
    `ReportsTo` INTEGER,
    `PhotoPath` TEXT,

    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employeeterritories` (
    `EmployeeID` INTEGER NOT NULL,
    `TerritoryID` VARCHAR(255),
INDEX `TerritoryID`(`TerritoryID`),

    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderdetails` (
    `OrderID` INTEGER NOT NULL,
    `ProductID` INTEGER,
    `UnitPrice` DECIMAL(10, 0),
    `Quantity` INTEGER,
    `Discount` DOUBLE,
INDEX `ProductID`(`ProductID`),

    PRIMARY KEY (`OrderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `OrderID` INTEGER NOT NULL AUTO_INCREMENT,
    `CustomerID` VARCHAR(255) NOT NULL,
    `EmployeeID` INTEGER,
    `OrderDate` DATE,
    `RequiredDate` DATE,
    `ShippedDate` DATE,
    `ShipVia` INTEGER,
    `Freight` DECIMAL(10, 0),
    `ShipName` TEXT,
    `ShipAddress` TEXT,
    `ShipCity` TEXT,
    `ShipRegion` TEXT,
    `ShipPostalCode` TEXT,
    `ShipCountry` TEXT,
INDEX `EmployeeID`(`EmployeeID`),
INDEX `ShipVia`(`ShipVia`),
INDEX `orders_ibfk_3`(`CustomerID`),

    PRIMARY KEY (`OrderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `ProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` TEXT,
    `SupplierID` INTEGER,
    `CategoryID` INTEGER,
    `QuantityPerUnit` TEXT,
    `UnitPrice` DECIMAL(10, 0),
    `UnitsInStock` INTEGER,
    `UnitsOnOrder` INTEGER,
    `ReorderLevel` INTEGER,
    `Discontinued` TEXT,
INDEX `SupplierID`(`SupplierID`),

    PRIMARY KEY (`ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regions` (
    `RegionID` INTEGER NOT NULL,
    `RegionDescription` TEXT,

    PRIMARY KEY (`RegionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shippers` (
    `ShipperID` INTEGER NOT NULL AUTO_INCREMENT,
    `CompanyName` TEXT,
    `Phone` TEXT,

    PRIMARY KEY (`ShipperID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suppliers` (
    `SupplierID` INTEGER NOT NULL AUTO_INCREMENT,
    `CompanyName` TEXT,
    `ContactName` TEXT,
    `ContactTitle` TEXT,
    `Address` TEXT,
    `City` TEXT,
    `Region` TEXT,
    `PostalCode` TEXT,
    `Country` TEXT,
    `Phone` TEXT,
    `Fax` TEXT,
    `HomePage` TEXT,

    PRIMARY KEY (`SupplierID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `territories` (
    `TerritoryID` VARCHAR(255) NOT NULL,
    `TerritoryDescription` TEXT,
    `RegionID` INTEGER,
INDEX `RegionID`(`RegionID`),

    PRIMARY KEY (`TerritoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD FOREIGN KEY (`CategoryID`) REFERENCES `products`(`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customercustomerdemo` ADD FOREIGN KEY (`CustomerID`) REFERENCES `customers`(`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customercustomerdemo` ADD FOREIGN KEY (`CustomerTypeID`) REFERENCES `customerdemographics`(`CustomerTypeID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employeeterritories` ADD FOREIGN KEY (`EmployeeID`) REFERENCES `employees`(`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employeeterritories` ADD FOREIGN KEY (`TerritoryID`) REFERENCES `territories`(`TerritoryID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD FOREIGN KEY (`OrderID`) REFERENCES `orders`(`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderdetails` ADD FOREIGN KEY (`ProductID`) REFERENCES `products`(`ProductID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD FOREIGN KEY (`CustomerID`) REFERENCES `customers`(`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD FOREIGN KEY (`EmployeeID`) REFERENCES `employees`(`EmployeeID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD FOREIGN KEY (`ShipVia`) REFERENCES `shippers`(`ShipperID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD FOREIGN KEY (`SupplierID`) REFERENCES `suppliers`(`SupplierID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `territories` ADD FOREIGN KEY (`RegionID`) REFERENCES `regions`(`RegionID`) ON DELETE SET NULL ON UPDATE CASCADE;
