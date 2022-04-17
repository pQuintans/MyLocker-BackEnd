import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateApm1650163326623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'apm',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'is_paid',
            type: 'tinyint',
          },
          {
            name: 'student_ra',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'status',
            type: 'tinyint',
            default: 1,
          },
        ],
        foreignKeys: [
          {
            name: 'FKStudentRaApm',
            referencedTableName: 'student',
            referencedColumnNames: ['ra'],
            columnNames: ['student_ra'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('apm')
  }
}
