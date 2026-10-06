const database = db.getSiblingDB("eppo");
print("========================================");
print("Starting PDC seed...");
print("========================================");
const pdcs = database.getCollection("pdcs");
const data = [
    {
        "Year": 2024,
        "Month": "JAN",
        "peak": 28852.7,
        "generation": 16922.74,
        "loadFactory": 78.83
    },
    {
        "Year": 2024,
        "Month": "FEB",
        "peak": 30849.9,
        "generation": 17321.31,
        "loadFactory": 80.67
    },
    {
        "Year": 2024,
        "Month": "MAR",
        "peak": 32508.2,
        "generation": 20026.8,
        "loadFactory": 82.8
    },
    {
        "Year": 2024,
        "Month": "APR",
        "peak": 36477.8,
        "generation": 20507.78,
        "loadFactory": 78.08
    },
    {
        "Year": 2024,
        "Month": "MAY",
        "peak": 36412.1,
        "generation": 20526.33,
        "loadFactory": 75.77
    },
    {
        "Year": 2024,
        "Month": "JUN",
        "peak": 33109.1,
        "generation": 18887.25,
        "loadFactory": 79.23
    },
    {
        "Year": 2024,
        "Month": "JUL",
        "peak": 30228.5,
        "generation": 18232.55,
        "loadFactory": 81.07
    },
    {
        "Year": 2024,
        "Month": "AUG",
        "peak": 31201,
        "generation": 18713.55,
        "loadFactory": 80.61
    },
    {
        "Year": 2024,
        "Month": "SEP",
        "peak": 29952.5,
        "generation": 17829.02,
        "loadFactory": 82.67
    },
    {
        "Year": 2024,
        "Month": "OCT",
        "peak": 30027.8,
        "generation": 18377.85,
        "loadFactory": 82.26
    },
    {
        "Year": 2024,
        "Month": "NOV",
        "peak": 30694.4,
        "generation": 17322.45,
        "loadFactory": 78.38
    },
    {
        "Year": 2024,
        "Month": "DEC",
        "peak": 29467.1,
        "generation": 15879.09,
        "loadFactory": 72.43
    },
    {
        "Year": 2024,
        "Month": "YTD",
        "peak": 36477.8,
        "generation": 220546.71,
        "loadFactory": 68.83
    },
    {
        "Year": 2025,
        "Month": "JAN",
        "peak": 27316.3,
        "generation": 15147.55,
        "loadFactory": 74.53
    },
    {
        "Year": 2025,
        "Month": "FEB",
        "peak": 30283.8,
        "generation": 15908.91,
        "loadFactory": 78.17
    },
    {
        "Year": 2025,
        "Month": "MAR",
        "peak": 32941.9,
        "generation": 19283.81,
        "loadFactory": 78.68
    },
    {
        "Year": 2025,
        "Month": "APR",
        "peak": 34568,
        "generation": 18657.47,
        "loadFactory": 74.96
    },
    {
        "Year": 2025,
        "Month": "MAY",
        "peak": 33199.6,
        "generation": 19177.59,
        "loadFactory": 77.64
    },
    {
        "Year": 2025,
        "Month": "JUN",
        "peak": 32113,
        "generation": 18335.55,
        "loadFactory": 79.3
    },
    {
        "Year": 2025,
        "Month": "JUL",
        "peak": 31080.9,
        "generation": 18531.28,
        "loadFactory": 80.14
    },
    {
        "Year": 2025,
        "Month": "AUG",
        "peak": 33062.5,
        "generation": 18837.61,
        "loadFactory": 76.58
    },
    {
        "Year": 2025,
        "Month": "SEP",
        "peak": 30609.1,
        "generation": 17926.85,
        "loadFactory": 81.34
    },
    {
        "Year": 2025,
        "Month": "OCT",
        "peak": 30547.5,
        "generation": 18276.51,
        "loadFactory": 80.42
    },
    {
        "Year": 2025,
        "Month": "NOV",
        "peak": 30428,
        "generation": 16252.33,
        "loadFactory": 74.18
    },
    {
        "Year": 2025,
        "Month": "DEC",
        "peak": 29307.9,
        "generation": 16380.98,
        "loadFactory": 75.12
    },
    {
        "Year": 2025,
        "Month": "YTD",
        "peak": 34568,
        "generation": 212716.43,
        "loadFactory": 70.25
    },
    {
        "Year": 2026,
        "Month": "JAN",
        "peak": 29198.9,
        "generation": 15865.74,
        "loadFactory": 73.03
    },
    {
        "Year": 2026,
        "Month": "FEB",
        "peak": 31974.5,
        "generation": 16754.28,
        "loadFactory": 77.97
    },
    {
        "Year": 2026,
        "Month": "MAR",
        "peak": 34109.2,
        "generation": 19605.18,
        "loadFactory": 77.25
    },
    {
        "Year": 2026,
        "Month": "APR",
        "peak": 35991.6,
        "generation": 20214.78,
        "loadFactory": 78.01
    },
    {
        "Year": 2026,
        "Month": "YTD",
        "peak": 35991.6,
        "generation": 92875.06,
        "loadFactory": 89.6
    }
];
try {
    const result = pdcs.insertMany(data);
    print("PDC seed completed successfully.");
    print("Inserted documents: " + Object.keys(result.insertedIds).length);
    print("Total documents in pdcs: " + pdcs.countDocuments());
} catch (error) {
    print("PDC seed FAILED!");
    print(error);
    throw error;
}
print("========================================");
print("PDC seed finished.");
print("========================================");