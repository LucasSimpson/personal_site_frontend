/**
 * Created by lucas on 2016-12-13.
 */

export class WorkExperience {
  constructor(
    public readonly chrono_order: number,
    public readonly title: string,
    public readonly company: string,
    public readonly dates: string,
    public readonly location: string,
    public readonly body: string,
    public readonly img_url: string
  ){}
}
