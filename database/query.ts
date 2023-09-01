import { db } from "@/database/db";

const findOne = async (tableName: string, params: object) => {
  try {
    
    const results : any[] = await db.query(`SELECT * FROM ${tableName} WHERE ? LIMIT 1`,params);

    return results[0];
  } catch (error) {
    return error;
  }
};

const findLogin = async (tableName: string, params: object) => {
  try {
    
    const results : any[] = await db.query(`SELECT * FROM ${tableName} WHERE ? LIMIT 1`,params);
    
    return {
      user: results[0], 
      error: false
    };
  } catch (error) {
    return {
      user: null, 
      error: true,
      data: error
    };
  }
};

const search = async (tableName: string, params: object) => {
  try {
    
    const results : any[] = await db.query(`SELECT * FROM ${tableName} WHERE ? `,params);

    return results;
  } catch (error) {
    return error;
  }
};

const save = async (tableName: string, params: object) => {
  try {
    
    const results : any = await db.query(`INSERT INTO ${tableName} SET ?`,params);

    return results.insertId;
  } catch (error) {
    return error;
  }
};

const update = async (tableName: string, params: object) => {
  try {
    
    const results : any = await db.query(`UPDATE ${tableName} SET ? WHERE id = ?`,params);

    return results;
  } catch (error) {
    return error;
  }
};

const destroy = async (tableName: string, params: object) => {
  try {
    
    const results : any = await db.query(`DELETE FROM ${tableName} WHERE id = ?`,params);

    return results;
  } catch (error) {
    return error;
  }
};

export { findOne, findLogin, search, save, update, destroy };